screenid=EmberJSONIspector

bgscreen () 
{
  if screen -list | awk '{print $1}' | grep -q "$1$"; then
    echo "Screen exists";
  else 
    cmd="screen -d -m -S ${1} -t wtf bash"
    echo ${cmd}
    ${cmd}
#    screen -S ${1} -X stuff screen -t ${1}
  fi
}

bgscreen ${screenid}
screen -S ${screenid} -X screen -t 
screen -S ${screenid} -X screen -t 
screen -S ${screenid} -p 0 -X stuff './runit.sh\n'

# -X screen node server.js
#screen -S ${screenid} -t ${screenid} -X screen node server.js
#screen -S ${screenid} -X screen echo Window 1
#screen -S ${screenid} -X screen echo Window 2
#screen -S ${screenid} -X screen echo Window 3

