class ReactNodeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="ReactNode" class="tabcontent">
    <h2>Deploy reactJs or NodeJs in digitalocean droplet</h2>
    <div class="content">
      <ul>
        <li>
          <p><b>Step-1:</b> Create a droplet.</p>
          <p><b>Step-2:</b> Install nginx in droplet root.</p>
          <p>
            <b>Step-3:</b>
            enabled ufw (config ufw), Enabled firewall (after allow openSSH,
            otherwise console disabled by firewall).
          </p>

          <p>
            <b>Step-4:</b> clone your project from github. (in '/var/www'
            -folder)
          </p>
          <p>
            <b>Step-5:</b> Install node, npm, express in your project and
            build.
          </p>
          <p>
            <b>Step-6:</b>
            configure nginx "default"- folder.(each projects for each file
            configure) ('/etc/nginx/sites-available' -folder)
          </p>
          <p><b>Step-7:</b> Install pm2 for forever server running.</p>
        </li>
      </ul>

      <div class="details">
        <span>
          Before we started you need to know basic linux commands. Here you get it: <a href="https://www.digitalocean.com/community/tutorials/linux-commands" target="_blank">Linux basic</a> <br/>
          <b>Step:-1 # Create a droplet</b>
          <p>
            Firstly you need to open an account in the Digital Ocean. They
            need a dual currency supported card(Master Card/Visa card/Credit
            card etc.) for international Transaction.
            <br />
            Just following the instructions of the Digital Ocean account
            creation, you can create your account easily. Click here:
            <a href="https://www.digitalocean.com/" target="_blank"
              >digitalocean</a
            >
          </p>
        </span>
        <br />
        <br />
        <br />
        <span>
          <b>Step:-2 & 3 # Install nginx in droplet root.</b>
          <p>
            In droplet Console you will see a droplet Console option. Click
            here to open Droplet Console. In this documentation you will see
            nginx --version 22.04.
          </p>
          <p>
            <strong>Prerequisites:</strong>
            <i>Initial Server Setup with Ubuntu 22.04 -></i><br />Setting Up
            a Firewall: <code>$ ufw app list </code><br />* Before Enabled
            firewalls, you should enabled the ufw OpenSSH. Otherwise
            firewall block you to access your droplet console.
            <code>$ ufw allow OpenSSH</code> <br />Then enabled firewall:
            <code>$ sudo ufw enable</code>
            <div>
              Important Links: <a href="https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands" target="_blank">UFW Essentials</a> 
            </div>
          </p>
          <br />
          <p>
            <b>Then Install firewall (Main Installation):</b>
            <code
              >$ sudo apt update <br />
              $ sudo apt install nginx</code
            >
            <b
              >Adjusting the Firewall: Before testing Nginx, the firewall
              software needs to be configured to allow access to the
              service. like:</b
            >
            <code
              >1. Nginx Full <br />
              2. Nginx HTTP <br />
              3. Nginx HTTPS <br />
              4. OpenSSH</code
            >
            N.B: 
            <ul>
              <li>Nginx Full: This profile opens both port 80 (normal, unencrypted web traffic) and port 443 (TLS/SSL encrypted traffic)</li>
                <li>Nginx HTTP: This profile opens only port 80 (normal, unencrypted web traffic)</li>
                <li>Nginx HTTPS: This profile opens only port 443 (TLS/SSL encrypted traffic)</li>
            </ul>
            <i>Here we install Nginx Full. In Nginx Full you will get Nginx HTTP and Nginx HTTPS both. </i><br/>
            <h4>Ok let's forward:</h4> <br/>
            Then Checking your Web Server: <code>$ systemctl status nginx</code>
            Managing the Nginx Process: <br/>
            <code>$ sudo systemctl stop nginx <br/>$ sudo systemctl start nginx <br />$ sudo systemctl restart nginx <br/>$ sudo systemctl reload nginx
            
            </code>
            important link: <a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04" target="_blank">Ubuntu essentials</a>
          </p>
        </span>
        <br/>
        <br/>
        <br/>
        <span>
          <b>Step:- 4 # clone your project from github. (in '/var/www' -folder)</b> <br/>
          
          From your droplet root you should have to go var/www folder and git clone your repository from github/gitlab/bitbucket etc.
          <code>$ cd /var/www</code>
          <code>$ git clone [your repo url]</code>
        </span>
        <br/>
        <br/>
        <br/>
        <span>
          <b>Step:-5 # Install node, npm, express js* in your project and build.</b>
          In this section you need to install nodejs, npm and express js* into your project. We use Node Version Manager to install nodejs.
          <code>$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</code>
          <code>source ~/.bashrc</code>
          You can see available node version on it: <code>$ nvm list-remote</code>
          Install the latest version of node: <code>$ nvm install v16 (Note: latest version in 2022)</code>
          To see your installed version, run the following command: <code>$ node -v</code>
          This Link help you to get several methods of installing node js: <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04" target="_blank">Node js installation</a>
          <br/>
          Install npm packages into your project root directory: <code>$ npm install -f</code>
          Install the following packages of express js*: <code>$ npm install --save express -f</code> <br/>
          <i>Note: Express js need to run your application in digitalocean droplet.</i> <br/>
          # make server.js file in your local repo and Copy paste This: <a href="https://create-react-app.dev/docs/deployment/" target="_blank">Documentation</a>
          <code>
            const express = require('express'); <br/>
            const path = require('path'); <br/>
            const app = express(); <br/>
            
            app.use(express.static(path.join(__dirname, 'build'))); <br/>
            
            app.get('/*', function (req, res) {
              res.sendFile(path.join(__dirname, 'build', 'index.html'));
            });
            <br/>
            
            app.listen(9000);</code>
        </span>
        <br/>
        <br/>
        <br/>
        <span>
          <b>Step-6: configure nginx "default"- folder.(each projects for each file configure) ('/etc/nginx/sites-available' -folder):</b>
          To get the default folder you need:
          <code>$ cd /etc/nginx/sites-available</code>
          To Configure it:
          <code>$ sudo nano default</code>
          Here you get the configured default file: <a href="https://github.com/mdmoinulhossain/WebHosting/blob/main/hostingProvider/DigitalOcean/nginx-default-server_block" target="_blank">Config</a>
        </span>
        <br/>
        <br/>
        <br/>
        <span>
          <b>Step-7: Install pm2 for forever server running.</b> <br/>
          Your website is ready now, but you need to run you application forever. Thats why you need to install pm2 package into your root droplet repo.
          <code>$ npm install -g pm2</code>
          <code>$ pm2 list</code>
          Into your project root folder run this command:
          <code>$ pm2 start server.js --name "project name"</code>
          * This server.js file you create before and for this you install express.js into your project.
          <br/>
          <a href="https://pm2.keymetrics.io/docs/usage/quick-start/">PM2 documentation</a> 
        </span>
        <br/>
        <br/>
        <span><i>I hope This documentation helps you lot. Thanks.</i></span>
      </div>
    </div>
  </div>`;
  }
}

customElements.define("react-node", ReactNodeComponent);
