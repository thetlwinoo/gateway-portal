package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.SupplierCategoriesDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity SupplierCategories and its DTO SupplierCategoriesDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SupplierCategoriesMapper extends EntityMapper<SupplierCategoriesDTO, SupplierCategories> {



    default SupplierCategories fromId(Long id) {
        if (id == null) {
            return null;
        }
        SupplierCategories supplierCategories = new SupplierCategories();
        supplierCategories.setId(id);
        return supplierCategories;
    }
}
