import React from 'react'
import { useForm, SubmitHandler, Controller, useFormContext } from 'react-hook-form'
type Inputs = {
    example: string,
    exampleRequired: string,
};

interface typeInputBas extends React.BaseSyntheticEvent{
    target: HTMLInputElement
} 
function HookForm() {

    const useFormTest = useForm<Inputs>({
        defaultValues: {
            example: "á"
        }
    });
    const { register, handleSubmit, control, setError, clearErrors } = useFormTest
    const onSubmitForm: SubmitHandler<Inputs> = (e) => {
        console.log(e)
        console.log(123)
    }

    const changeInput = (e: typeInputBas) => {
        console.log(e)

        if(e.target.value.length <= 0){
            setError("example", {
                message: "Please enter",
                type: "noText"
            })

            return;
        }else{
            clearErrors("example")
        }
     

}

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input  {...regcister("example")} /> */}
                <Controller
                    name='example'
                    render={(props) => {
                        
                        return <input onChange={e =>{
                            props.field.onChange(e)
                            changeInput(e)
                        }}

                            onBlur={props.field.onBlur}
                        />
                    }}
                    
                    control={control}
                />
                {useFormTest.formState.touchedFields.example && (<span>ksdfhksdhf</span>)}
                {useFormTest.formState.errors.example && useFormTest.formState.errors.example.type == "noText" && <span> {useFormTest.formState.errors.example.message}</span>}
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {useFormTest.formState.errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default HookForm