import {RichText, useBlockProps} from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {

	return (
		<div {...useBlockProps()}>
			<div className="wp-block-create-block-random-quotes-container">
				<div className="wp-block-create-block-random-quotes-quote">
					<span className="dashicons dashicons-format-quote"></span>
					<p>
						<RichText value={attributes.quote}
								  onChange={(val) => setAttributes({quote: val})}
								  placeholder={attributes.quote}
						/>
					</p>
				</div>
				<div className="wp-block-create-block-random-quotes-author">
					<p><RichText value={attributes.author}
								 onChange={(val) => setAttributes({author: val})}
								 placeholder={attributes.author}
								 className="wp-block-dark-quote-d-inline-block"
					/>
					</p>
				</div>
			</div>
		</div>
	);
}
