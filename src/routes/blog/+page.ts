import Repository from './lib/github';
import { REPO_OWNER, REPO, BRANCH } from './lib/configuration';

export async function load({ fetch }) {
	const repo = new Repository(REPO_OWNER, REPO, { branch: BRANCH, fetchFn: fetch });
	const files = await repo.listDirectory(`blog`);

	return { files };
}
