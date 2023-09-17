export const endpoints = {
	revanced: {
		patches: {
			url: 'https://api.revanced.app/v2/patches/latest',
			get: async function () {
				const data = await (await fetch(this.url)).json();
				return data.patches;
			}
		},
		manager: {
			url: 'https://api.revanced.app/v2/revanced-manager/releases/latest',
			get: async function () {
				const data = await (await fetch(this.url)).json();
				return data.release;
			}
		}
	},
	github: {
		microg: {
			url: 'https://api.github.com/repos/inotia00/VancedMicroG/releases/latest',
			get: async function () {
				return await (await fetch(this.url)).json();
			}
		}
	}
};
