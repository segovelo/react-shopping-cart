// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from './CartItem.styles';
import {StyledButton} from './CartItem.styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    deleteFromCart: (id: number) => void;
}
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart, deleteFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <p>Price: ${item.price}</p>
                <p>Subtotal: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <StyledButton 
                    onClick={() => removeFromCart(item.id)}>
                    <RemoveCircleOutlineIcon/>
                </StyledButton>
                <p className='item-amount'>{item.amount}</p>
                <StyledButton 
                    onClick={() => addToCart(item)}>
                    <AddCircleOutlineIcon/>
                </StyledButton>
                <StyledButton onClick={() => deleteFromCart(item.id)}>
                    <DeleteIcon/>
                </StyledButton>

            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;