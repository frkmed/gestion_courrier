@echo off
echo  """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
echo  " __  __           _       _         ____  ____   ____                  "
echo  "|  \/  | ___   __| |_   _| | ___   / ___|/ ___| / ___|  ___ __ _ _ __  "
echo  "| |\/| |/ _ \ / _` | | | | |/ _ \ | |  _| |     \___ \ / __/ _` | '_ \ "
echo  "| |  | | (_) | (_| | |_| | |  __/ | |_| | |___   ___) | (_| (_| | | | |"
echo  "|_|  |_|\___/ \__,_|\__,_|_|\___|  \____|\____| |____/ \___\__,_|_| |_|"
echo  "                                                                       "
echo  """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""     
echo  """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""                                                                   
echo  " Programme d'installation - version 1.0 - ESTS/LP IAM TA 2017/2018     "
echo  "                                                                       "
echo  """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
echo Le module sera install‚ dans le dossier c:\gc-scan
pause

mkdir c:\gc-scan
copy _files\* c:\gc-scan
copy _files\gc-scan-module.lnk %UserProfile%\Desktop
copy _files\gc-scan-module.lnk "C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup" 
start "" "c:\gc-scan\gc-scan-module.lnk"
echo  *************************************************************************
echo  INSTALLATION TERMINE ! NOTEZ QUE LE MODULE SERA EXECUTE CHAQUE DEMARRAGE!
echo  *************************************************************************


