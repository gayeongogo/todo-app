import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdOutlineRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import "./TodolistItem.scss";

const TodoListItem = ({todo}) => {
    const {text, checked} =todo;
    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdOutlineRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;