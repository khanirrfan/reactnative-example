/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   19-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: seckillSaga.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * seckill saga
 */

import { call, put, takeLatest} from 'redux-saga/effects';
import {getSecskillProductGroup} from '../network/index';
import * as actions from '../actions/SeckillRelatedActions';
import { FETCH_SECKILL_DATA } from '../actions/actionTypes';

//gid, wareId
function* fetchSeckillData(action) {
    const { gid, wareId } = action;
    try {
        const data = yield call (getSecskillProductGroup, gid, wareId);
        yield put( actions.fetchSeckillSuccess(data.seckillInfo.itemList) );
    } catch(e) {
        yield put( actions.fetchSeckillFailure(e.message));
    }
}

export default function* seckillSaga() {
    yield takeLatest(FETCH_SECKILL_DATA, fetchSeckillData);
}
