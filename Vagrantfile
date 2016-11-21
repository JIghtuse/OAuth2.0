# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
ENV['VAGRANT_DEFAULT_PROVIDER'] = 'virtualbox'
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.provision :shell, path: "pg_config.sh"
  config.vm.box = "ubuntu/trusty32"
  config.vm.network "forwarded_port", guest: 5000, host: 5000
  
end
