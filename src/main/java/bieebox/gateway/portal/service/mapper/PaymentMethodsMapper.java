package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.PaymentMethodsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity PaymentMethods and its DTO PaymentMethodsDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PaymentMethodsMapper extends EntityMapper<PaymentMethodsDTO, PaymentMethods> {



    default PaymentMethods fromId(Long id) {
        if (id == null) {
            return null;
        }
        PaymentMethods paymentMethods = new PaymentMethods();
        paymentMethods.setId(id);
        return paymentMethods;
    }
}
