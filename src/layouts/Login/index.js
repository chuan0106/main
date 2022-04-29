import styles from './style.less'
import Toolbar from '@/component/Toolbar'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react';
import { getPageTitle, routerError } from '../basic';

const index = (props) =>
{
    useEffect(() =>
    {
        routerError(props)
    }, [])
    return (
        <div className={styles.wrap} >
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="./logo/yushen4.jpg" />
                {/* 拿不到更改后的 title 就直接在 routes 修改为 title 了 */}
                <title>{getPageTitle(props)}</title>
            </Helmet>
            <div className={styles.content}>
                <div className={styles.toolbarContainers}>
                    <Toolbar />
                </div>
                {props.children}
            </div>

        </div>
    );
};
export default index