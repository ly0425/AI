import React, { Component } from 'react';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { detail } from '@/services/api';
import styles from './Detail.less';

class Detail extends Component {

  state = {
    data: [],
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    detail(params.id).then(r => {
      this.setState({
        data: r.document,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // 比较本次路由传递的参数和下次路由传递的参数值是否一致
    // 不一致重新获取数据更改state实现页面刷新
    if (id !== nextProps.match.params.id) {
      const nextId = nextProps.match.params.id;
      detail(nextId).then(r => {
        this.setState({
          data: r.document,
        });
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <GridContent>
        <div className={styles.normal}>
          <div className={styles.details}>
            {data.length > 0 ?
              data.map((item, index) =>
                <div key={index}>
                  <div className={styles.paragraphTitle}>{item.field_paragraph_title_value}</div>
                  <div
                    className={styles.paragraphContent}
                    dangerouslySetInnerHTML={{ __html: item.field_paragraph_content_value }}
                  />
                </div>,
              ) : ''
            }
          </div>
        </div>
      </GridContent>
    );
  }
}

export default Detail;
