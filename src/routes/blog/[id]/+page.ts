import Repository from '../lib/github';
import { REPO_OWNER, REPO, BRANCH } from '../lib/configuration';

export async function load({ fetch, params }) {
	const repo = new Repository(REPO_OWNER, REPO, { branch: BRANCH, fetchFn: fetch });
	const content = await repo.getRawFileContents(`blog/${params.id}.md`);

	return { content };
}
