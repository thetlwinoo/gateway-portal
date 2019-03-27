package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.CustomerCategoriesDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity CustomerCategories and its DTO CustomerCategoriesDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CustomerCategoriesMapper extends EntityMapper<CustomerCategoriesDTO, CustomerCategories> {



    default CustomerCategories fromId(Long id) {
        if (id == null) {
            return null;
        }
        CustomerCategories customerCategories = new CustomerCategories();
        customerCategories.setId(id);
        return customerCategories;
    }
}
