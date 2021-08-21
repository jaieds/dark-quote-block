import {RichText, useBlockProps} from '@wordpress/block-editor';


export default function save({attributes}) {
	return (
		<div {...useBlockProps.save()}>
			<div className="wp-block-create-block-random-quotes-container">
				<div className="wp-block-create-block-random-quotes-quote">
					<span className="dashicons dashicons-format-quote"></span>
					<p><RichText.Content value={attributes.quote}/></p>
				</div>
				<div className="wp-block-create-block-random-quotes-author">
					<p><RichText.Content value={attributes.author}/></p>
				</div>
			</div>
		</div>
	);
}
