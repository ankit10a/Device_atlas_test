# Navigate to backend directory
cd backend

# Download wait-for-it.sh to backend folder
curl -O https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh

# Make it executable
chmod +x wait-for-it.sh

# Verify file exists in correct location
ls -la wait-for-it.sh  # Should show the file with execute permissions

# Return to project root
cd ..