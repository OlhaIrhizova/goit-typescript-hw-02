import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../app/App.types';

const LoadMoreBtn = ({onClick}:LoadMoreBtnProps) => {
    
return (
<div className={css.btnContainer}>
<button  onClick={onClick} className={css.loadMoreBtn}>Load More</button>
</div>
    
)
}
export default LoadMoreBtn;