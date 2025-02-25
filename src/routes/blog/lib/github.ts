type GhDirectoryFile = {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: {
		self: string;
		git: string;
		html: string;
	};
};

type GhFile = GhDirectoryFile & {
	content: string;
	encoding: string;
};

type RepositoryOptions = {
	branch?: string;
	fetchFn?: typeof Window.prototype.fetch;
};

export default class Repository {
	private owner: string;
	private name: string;
	private branch: string;
	private fetchFn: typeof Window.prototype.fetch;

	public constructor(owner: string, name: string, options: RepositoryOptions = {}) {
		this.owner = owner;
		this.name = name;
		this.branch = options.branch || 'main';
		this.fetchFn = options.fetchFn || window.fetch;
	}

	private buildApiUrl(path: string) {
		if (path.startsWith('/')) path = path.substring(1);
		return `https://api.github.com/repos/${this.owner}/${this.name}/contents/${path}?ref=${this.branch}`;
	}

	public async listDirectory(path: string) {
		return (await this.fetchFn(this.buildApiUrl(path)).then((r) => r.json())) as GhDirectoryFile[];
	}

	public async getFile(path: string) {
		return (await this.fetchFn(this.buildApiUrl(path)).then((r) => r.json())) as GhFile;
	}

	public async getRawFileContents(path: string) {
		const rawUrl = (await this.getFile(path)).download_url;
		return await this.fetchFn(rawUrl).then((r) => r.text());
	}
}
