import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { useCallback } from "react";
import { setExample, ExampleState } from '../reducers/example';

function useExample(){
    const example = useSelector((state:RootState) => state.example);
    const dispatch = useDispatch();

    const onSetExample = useCallback(async (number:ExampleState) => {
        
        dispatch(setExample(number));

    }, [dispatch]);

    return {
        example,
        onSetExample
    }
}

export default useExample;