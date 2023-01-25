import styles from './home.module.scss';
import classNames from 'classnames';

export interface HomeProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */
export const Home = ({ className, children = 'Home' }: HomeProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
