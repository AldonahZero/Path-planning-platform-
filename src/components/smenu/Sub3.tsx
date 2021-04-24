/**
 *
 */
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import MyTreeSelect from './MyTreeSelect';
import { Checkbox, Avatar, Descriptions } from 'antd';
import { Tag, Divider } from 'antd';
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

class SmenuSub3 extends React.Component {
    state = {
        gallery: null,
    };
    componentDidMount() {}
    componentWillUnmount = () => {
        this.closeGallery();
    };
    pswpElement: any;
    gallery: any;
    openGallery = (item: any) => {
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            },
        ];
        const pswpElement = this.pswpElement;
        const options = { index: 0 };
        this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index: number, item: any) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) {
                // unknown size
                var img = new Image();
                img.onload = function () {
                    // will get size after load
                    item.w = (this as any).width; // set image width
                    item.h = (this as any).height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
    render() {
        const { Meta } = Card;
        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

        const imgs = [
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
            [
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48',
                'https://img2.baidu.com/it/u=2531178202,2979573512&fm=26&fmt=auto&gp=0.jpg',
            ],
        ];
        const imgsTag = imgs.map((v1) =>
            v1.map((v2) => (
                <div className="gutter-box" key={v2}>
                    <Card hoverable actions={[<Checkbox></Checkbox>]}>
                        <div>
                            <img
                                onClick={() => this.openGallery(v2)}
                                alt="example"
                                width="100%"
                                src={v2}
                            />
                        </div>
                        <Meta
                            avatar={
                                <Avatar src="https://img0.baidu.com/it/u=4270496049,167206765&fm=26&fmt=auto&gp=0.jpg" />
                            }
                            title="Dev"
                            description="多波段数据与路径分析"
                        />
                    </Card>
                </div>
            ))
        );
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom breads={['图片拼接', '服务端图片列表']} />
                <Row gutter={16}>
                    <MyTreeSelect />
                </Row>
                <Card hoverable style={{ background: '#ffffff' }}>
                    <Row gutter={16}>
                        <Descriptions title="文档信息">
                            <Col span={8}>
                                <Countdown title="文件总计" value={deadline} format="SSS GB" />
                            </Col>
                            <Col span={8}>
                                <Countdown title="搜索耗时" value={deadline} />
                            </Col>
                            <Col span={24}>
                                <Countdown title="文件数" value={deadline} format="s 个" />
                            </Col>
                            <Col span={24}>
                                <Countdown title="共享的文件" value={'Hangzhou, Zhejiang'} />
                            </Col>
                            <Descriptions.Item label="已锁定">
                                <Tag icon={<SyncOutlined spin />} color="processing">
                                    锁定中
                                </Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="只读模式">
                                <Tag icon={<CheckCircleOutlined />} color="success">
                                    success
                                </Tag>
                            </Descriptions.Item>
                        </Descriptions>
                    </Row>
                </Card>
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[0]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[1]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[2]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[4]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[5]}
                    </Col>
                </Row>
                <div
                    className="pswp"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                    ref={(div) => {
                        this.pswpElement = div;
                    }}
                >
                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter" />

                                <button
                                    className="pswp__button pswp__button--close"
                                    title="Close (Esc)"
                                />

                                <button
                                    className="pswp__button pswp__button--share"
                                    title="Share"
                                />

                                <button
                                    className="pswp__button pswp__button--fs"
                                    title="Toggle fullscreen"
                                />

                                <button
                                    className="pswp__button pswp__button--zoom"
                                    title="Zoom in/out"
                                />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button
                                className="pswp__button pswp__button--arrow--left"
                                title="Previous (arrow left)"
                            />

                            <button
                                className="pswp__button pswp__button--arrow--right"
                                title="Next (arrow right)"
                            />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        );
    }
}

export default SmenuSub3;
