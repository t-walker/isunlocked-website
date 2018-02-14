npm run build
scp -r ./frontend_build/* twalker@isunlocked.com:/var/www/isunlocked-react
scp -r ./server_build/* twalker@isunlocked.com:~/isunlocked/dist
