
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import cartReducer from '../cart/reducer'


Enzyme.configure({ adapter: new Adapter() })

describe('Testing Dummy Action for the reducer', () => {
          it('should do nothing when the action type does not match', () => {
                    const action = { type: 'dummy_action' };
                    expect(cartReducer([], action)).toEqual([]);
          })
})

describe('Testing Valid Actions for the reducer', () => {
          test('should return the correct state when action type matches', () => {
                    const _payload = {
                              "id": 1,
                              "name": "To Kill a Mockingbird",
                              "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                              "image": "mockingbird.jpg",
                              "price": 19.99
                    }
                    const action = { type: 'ADD', payload: _payload };
                    const expectedState = [{
                              "id": 1,
                              "name": "To Kill a Mockingbird",
                              "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                              "image": "mockingbird.jpg",
                              "price": 19.99,
                              "quantity": 1
                    }]

                    expect(cartReducer([], action)).toEqual(expectedState);
          })
})