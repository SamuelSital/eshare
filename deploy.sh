#!/bin/bash
scp -r dist/ energy:~/
ssh energy 'sudo ./deploy.sh'
