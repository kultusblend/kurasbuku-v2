import { visit } from 'unist-util-visit';

export function remarkLazyImages() {
	return (tree) => {
		visit(tree, 'image', (node) => {
			node.data = node.data || {};
			node.data.hProperties = node.data.hProperties || {};
			node.data.hProperties.loading = 'lazy';
			node.data.hProperties.decoding = 'async';
		});
		visit(tree, 'html', (node) => {
			if (typeof node.value === 'string' && /<img\b/i.test(node.value)) {
				node.value = node.value.replace(/<img\b(?![^>]*\bloading=)([^>]*)>/gi, '<img loading="lazy" decoding="async"$1>');
			}
		});
	};
}
