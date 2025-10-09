#!/bin/bash

# Base directory path
BASE_DIR="src/pages"

# Loop through each subdirectory
for dir in "$BASE_DIR"/*/; do
  # Ensure it's a directory
  if [ -d "$dir" ]; then
    cd "$dir" || continue

    # If merge-pdf.astro exists, rename it
    if [ -f "merge-pdf.astro" ]; then
      mv merge-pdf.astro compress-pdf.astro
      echo "Renamed merge-pdf.astro to compress-pdf.astro in $dir"
    fi

    # Find all .astro files and replace "Merge_PDF" with "Compress_PDF"
    find . -type f -name "*.astro" -exec sed -i 's/Merge_PDF/Compress_PDF/g' {} +

    echo "Replaced 'Merge_PDF' with 'Compress_PDF' in all .astro files inside $dir"

    # Return to base directory
    cd - > /dev/null || exit
  fi
done
