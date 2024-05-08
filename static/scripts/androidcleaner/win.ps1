$adbExists = Get-Command adb.exe -ErrorAction SilentlyContinue
if ($null -eq $adbExists) {
    Write-Host "Error: ADB not found. Please ensure it is installed and available in the PATH."
    Write-Host "Download ADB here: https://developer.android.com/tools/releases/platform-tools#downloads"
    exit 1
}
& adb.exe devices
Clear-Host
Write-Host "ANDROID CLEANER"
Write-Host
Write-Host "This script will force stop all the non-system apps on your Android phone, then clear the system cache."
Write-Host "Remember to re-open the apps you want to receive notifications from."
Write-Host
& adb.exe shell "for p in `$(pm list packages -3 | cut -f2 -d`":`"); do am force-stop `$p && echo `"Stopped `$p`"; done && pm trim-caches 999999999999 && echo `"Cleared cache`""