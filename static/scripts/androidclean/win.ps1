$adbExists = Get-Command adb.exe -ErrorAction SilentlyContinue
if ($null -eq $adbExists) {
    Write-Host "`e[1m`e[31mError: ADB is not found. Please ensure it is installed and available in the PATH.`nDownload it here: `e[0m`e[36mhttps://developer.android.com/tools/releases/platform-tools#downloads`e[0m"
    exit 1
}
& adb.exe devices
Clear-Host
Write-Host "`e[1m`e[33mANDROID CLEANER`e[0m`n"
& adb.exe shell "for p in `$(pm list packages -3 | cut -f2 -d`":`"); do am force-stop `$p && echo `"`e[32m>`e[0m `e[36mStopped`e[0m `e[35m`$p`e[0m`"; done && pm trim-caches 999999999999 && echo `"`e[32m>`e[0m `e[36mCleared cache`e[0m`""