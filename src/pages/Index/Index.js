import React, { Component } from 'react';
import { Icon } from 'antd';

import GridContent from '@/components/PageHeaderWrapper/GridContent';

import Link from 'umi/link';
import { index } from '@/services/api';

import styles from './Index.less';

class Index extends Component {

  state = {
    data: [],
  };

  componentDidMount() {
    index().then(r => {
      this.setState({
        data: r.document_tree,
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <GridContent>
        <div className={styles.normal}>
          <div className={styles.banner}/>
          <div className={styles.center}>
            <h1>产品服务</h1>
            <ul>
              {data.length > 0 ?
                data[0].children.map((item, index) =>
                  (
                    <li className={styles.modular} key={index}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.info} dangerouslySetInnerHTML={{ __html: item.body }} title={item.body}/>
                      <Link to={`/${item.children[0].nid}`} className={styles.viewDetails}>查看详情&nbsp;&nbsp;<Icon type="arrow-right" /></Link>
                    </li>
                  ),
                ) : ''
              }
            </ul>
          </div>
        </div>
      </GridContent>
    );
  }
}

export default Index;
