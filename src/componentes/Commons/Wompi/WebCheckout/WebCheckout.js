import { useEffect } from "react"

const WebCheckout = ({dataPayment, onSubmit}) => {

    const data = dataPayment
    
    useEffect(() =>{
        const btnSubmit = document.getElementById('btn-checkout-wompi')
        btnSubmit.click();
    }, [onSubmit])

    
    return(
        <form action="https://checkout.wompi.co/p/" method="GET">
            <input type="hidden" name="public-key" defaultValue={data?.public_key} />
            <input type="hidden" name="currency" defaultValue={data?.currency} />
            <input type="hidden" name="amount-in-cents" defaultValue={data?.amount_cents} />
            <input type="hidden" name="reference" defaultValue={data?.reference} />
            <input type="hidden" name="signature:integrity" defaultValue={data?.signature}/>
            <button type="submit" id="btn-checkout-wompi"></button>
            <input type="hidden" name="redirect-url" value="https://dashboard.xlearn.com.co/creacion/usuarios" />
            
            {/* <input type="hidden" name="tax-in-cents:vat" value="IVA_EN_CENTAVOS" />
            <input type="hidden" name="tax-in-cents:consumption" value="IMPOCONSUMO_EN_CENTAVOS" />
            <input type="hidden" name="customer-data:email" value="CORREO_DEL_PAGADOR" />
            <input type="hidden" name="customer-data:full-name" value="NOMBRE_DEL_PAGADOR" />
            <input type="hidden" name="customer-data:phone-number" value="NUMERO_DE_TELEFONO_DEL_PAGADOR" />
            <input type="hidden" name="customer-data:legal-id" value="DOCUMENTO_DE_IDENTIDAD_DEL_PAGADOR" />
            <input type="hidden" name="customer-data:legal-id-type" value="TIPO_DEL_DOCUMENTO_DE_IDENTIDAD_DEL_PAGADOR" />
            <input type="hidden" name="shipping-address:address-line-1" value="DIRECCION_DE_ENVIO" />
            <input type="hidden" name="shipping-address:country" value="PAIS_DE_ENVIO" />
            <input type="hidden" name="shipping-address:phone-number" value="NUMERO_DE_TELEFONO_DE_QUIEN_RECIBE" />
            <input type="hidden" name="shipping-address:city" value="CIUDAD_DE_ENVIO" />
            <input type="hidden" name="shipping-address:region" value="REGION_DE_ENVIO" />  */}
            <button type="submit">Pagar con Wompi</button>
            
        </form>
    )
}

export default WebCheckout