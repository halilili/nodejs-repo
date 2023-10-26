# nodejs-repo
This repo to be used as an practice for github actions, it is originated from github-action-ci-cd-intro 



Some problem faced in cd-vm-deployment workflow job: Deploy To staging

1) solution for permiision denied on /var/app -> create it on the server VM ->
   sudo mkdir /var/app
   sudo sudo chmod -R 777 /var/app
2) solution for permiision denied on /var/app/web -> create it on the server VM ->
   sudo mkdir /var/app/web
   chown -R ubuntu /var/app/web
3) last problem on /var/app/web/
  sudo chown -R ubuntu /var/app/web/



Prepare the staging environment:
1) How to install node, npm and pm2 on Linux
   please follow these instructions: https://medium.com/@tushar.jadhav29/how-to-install-node-npm-and-pm2-on-linux-d0bd1a03aaac
   


