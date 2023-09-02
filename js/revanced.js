function createEl(tag, attrs) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => (el[key] = value));
    return el;
}

function latestYtSuggestedVersion(patches) {
    const ytPatch = patches.find((patch) => {
        return patch.compatiblePackages.find((p) => p.name === 'com.google.android.youtube');
    });

    if (ytPatch) {
        const versions = ytPatch.compatiblePackages.find((p) => p.name === 'com.google.android.youtube').versions;

        return versions.reduce((max, version) => {
            return version > max ? version : max;
        }, versions[0]);
    }
}

refreshLinks();
// let isLightTheme = true;

(async () => {
    const patchesData = await (await fetch('https://api.revanced.app/v2/patches/latest', { mode: 'cors' })).json();
    const managerData = await (
        await fetch('https://api.revanced.app/v2/revanced-manager/releases/latest', { mode: 'cors' })
    ).json();
    const microGData = await (await fetch('https://api.github.com/repos/inotia00/VancedMicroG/releases/latest')).json();
    const patches = patchesData.patches;
    const manager = managerData.release;

    const microGApk = microGData.assets.find((asset) => /microg.*\.apk/.test(asset.name));
    const latestManagerDate = new Date(Date.parse(manager.metadata.published_at));
    const latestMicroGDate = new Date(Date.parse(microGData.published_at));
    const suggestedYtVersion = latestYtSuggestedVersion(patches);

    const managerContainer = createEl('div', {
        id: 'revanced-manager-container',
        classList: 'app-container',
        innerHTML: `
<h1>ReVanced Manager</h1>
<div>Version <span class="comment">${manager.metadata.tag_name.replace(/v|version /i, '')}</span></div>
<div>Published ${latestManagerDate.toLocaleString()}</div>
<span class="comment">${manager.assets[0].name}</span>
<div>
    <a id="manager-download" class="button large">
        <i>download</i>
        Download
    </a>
    <a id="manager-open" class="button large" onclick="window.open('//revanced.app/download', '_blank')">
        <i>open_in_new</i>
        Go to website
    </a>
</div>
`,
    });

    const ytContainer = createEl('div', {
        id: 'youtube-container',
        classList: 'app-container',
        innerHTML: `
<h1>YouTube</h1>
<div>Suggested version by ReVanced: <span class="comment">${suggestedYtVersion}</span></div>
<div>
    Make sure it's only the apk and <b class="comment" style="text-decoration: underline;">NOT</b> a bundled apk,
    <br>
    then click the download button.
</div>
<div>
    <a id="youtube-download" class="button large">
        <i>open_in_new</i>
        Download from ApkMirror
    </a>
</div>
`,
    });

    const microGContainer = createEl('div', {
        id: 'microg-container',
        classList: 'app-container',
        innerHTML: `
<h1>MicroG</h1>
<div>Version <span class="comment">${microGData.tag_name.replace(/v|version /i, '')}</span></div>
<div>Published ${latestMicroGDate.toLocaleString()}</div>
<span class="comment">${microGApk.name}</span>
<div>
    <a id="microg-download" class="button large">
        <i>download</i>
        Download
    </a>
    <a id="microg-open" class="button large" onclick="window.open('//github.com/inotia00/VancedMicroG/releases/latest', '_blank')">
        <i>open_in_new</i>
        Go to website
    </a>
</div>
`,
    });

    document.querySelector('main').append(managerContainer, ytContainer, microGContainer);

    const downloadManagerBtn = document.querySelector('#manager-download');
    downloadManagerBtn.addEventListener('click', () => {
        window.open(manager.assets[0].browser_download_url, '_blank');
    });

    const downloadYtBtn = document.querySelector('#youtube-download');
    downloadYtBtn.addEventListener('click', () => {
        const versionDashed = suggestedYtVersion.replace(/\./g, '-');
        window.open(
            `https://www.apkmirror.com/apk/google-inc/youtube/youtube-${versionDashed}-release/youtube-${versionDashed}-android-apk-download/`,
            '_blank'
        );
    });

    const downloadMicroGBtn = document.querySelector('#microg-download');
    downloadMicroGBtn.addEventListener('click', () => {
        window.open(microGApk.browser_download_url, '_blank');
    });

    refreshLinks();
})().catch(() => {
    document.body.innerHTML = `
<div id="adblocker">
    <div>
        If you're seeing this, it means an <span class="comment">AdBlocker</span> is blocking
        the connection with the <span class="comment">ReVanced API</span>.
        Please disable the extension(s) for this website.
    </div>
    <img src="../img/adblocker.png">
</div>
`;
});
