#!/bin/bash
# Find files and folders, skipping git elements and node modules
FILES=$(find . -maxdepth 2 -not -path '*/.*' -not -path './node_modules*' -not -path './.git*' -not -path '.')
FILE_ARRAY=($FILES)
TOTAL_FILES=${#FILE_ARRAY[@]}

# Distribute roughly across 20 days
FILES_PER_DAY=$(( (TOTAL_FILES + 19) / 20 ))

for i in {20..1}; do
  START_INDEX=$(((20 - i) * FILES_PER_DAY))
  END_INDEX=$((START_INDEX + FILES_PER_DAY - 1))
  
  if [ $START_INDEX -ge $TOTAL_FILES ]; then
    break
  fi

  # Safely stage individual files
  for j in $(seq $START_INDEX $END_INDEX); do
    if [ $j -lt $TOTAL_FILES ] && [ -f "${FILE_ARRAY[$j]}" ]; then
      git add "${FILE_ARRAY[$j]}"
    fi
  done

  # Correct macOS syntax for past dates
  COMMIT_DATE=$(date -v-"${i}"d +"%Y-%m-%dT%H:%M:%S")
  
  # Check if anything was actually staged before committing
  if ! git diff --cached --quiet; then
    GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" git commit -m "Build system structures: segment $i"
  fi
done

