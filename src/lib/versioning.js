import { compare, coerce } from 'semver';

export function getPatchFromPkg(pkgName, patches) {
	return patches.find((patch) => patch.compatiblePackages.some((pkg) => pkg.name === pkgName));
}

export function latestPatchAppVersion(patch, showAll) {
	if (patch.compatiblePackages.length && patch.compatiblePackages[0].versions.length) {
		if (showAll) {
			patch.compatiblePackages[0].versions.forEach((v) => {
				return v
					.slice()
					.sort((a, b) => {
						const coercedA = coerce(a);
						const coercedB = coerce(b);
						if (coercedA && coercedB) return compare(coercedA, coercedB);
						else if (!coercedA && !coercedB) return 0;
						else return !coercedA ? 1 : -1;
					})
					.reverse();
			});
		} else return patch.compatiblePackages[0].versions.slice(-1);
	}
}
