import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class Feature extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let feature = _.get(this.props, 'feature', null);
        let feature_padding_bottom = _.get(section, 'feature_padding_bottom', null) || 'medium';
        let align_x = _.get(feature, 'align', null) || 'left';
        let has_text = false;
        let has_image = false;
        let image_pos = _.get(feature, 'image_position', null) || 'left';
        if (((_.get(feature, 'title', null) || _.get(feature, 'content', null)) || _.get(feature, 'actions', null))) {
             has_text = true;
        }
        if (_.get(feature, 'image', null)) {
             has_image = true;
        }
        return (
            <React.Fragment>
                <div className={classNames('feature', {'py-3': feature_padding_bottom === 'small', 'py-4': feature_padding_bottom !== 'small', 'py-sm-6': feature_padding_bottom === 'large'})}>
                	<div className="grid items-center">
                		{has_image && (
                		<div className={classNames('feature__image', 'text-center', 'cell-12', {'cell-md-6': has_text, 'mb-4': has_text, 'mb-md-0': has_text})}>
                			<img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                		</div>
                		)}
                		{has_text && (
                		<div className={classNames('feature__body', 'cell-12', {'cell-md-6': has_image, 'order-md-first': has_image && (image_pos === 'right'), 'text-center': align_x === 'center'})}>
                			{_.get(feature, 'title', null) && (
                				_.get(section, 'title', null) ? (
                				<h3 className="feature__title h2">{_.get(feature, 'title', null)}</h3>
                				) : 
                				<h2 className="feature__title h2">{_.get(feature, 'title', null)}</h2>
                			)}
                			{_.get(feature, 'content', null) && (
                			<div className="feature__copy">
                				{markdownify(_.get(feature, 'content', null))}
                			</div>
                			)}
                			{_.get(feature, 'actions', null) && (
                			<div className={classNames('feature__actions', 'btn-group', {'justify-center': align_x === 'center', 'justify-end': align_x === 'right', 'mt-4': _.get(feature, 'title', null) || _.get(feature, 'content', null)})}>
                				<SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
                			</div>
                			)}
                		</div>
                		)}
                	</div>
                </div>
            </React.Fragment>
        );
    }
}
