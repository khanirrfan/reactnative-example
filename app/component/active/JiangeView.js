/**
 *
 * 间隔视图
 *
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';

import common from '../../util/common';
import model from '../../model/active/JiangeModel';

export default class JiangeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = model.parseData(this.props.data);
        return (
            <View style={[styles.w, {height: data.height}, {backgroundColor: data.backgroundColor}]}></View>
        );
    }
}

const styles = common.createStyles({
    w: {
        width: common.getScreenDimension().width
    }
});