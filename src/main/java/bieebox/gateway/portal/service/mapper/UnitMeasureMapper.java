package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.UnitMeasureDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity UnitMeasure and its DTO UnitMeasureDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface UnitMeasureMapper extends EntityMapper<UnitMeasureDTO, UnitMeasure> {



    default UnitMeasure fromId(Long id) {
        if (id == null) {
            return null;
        }
        UnitMeasure unitMeasure = new UnitMeasure();
        unitMeasure.setId(id);
        return unitMeasure;
    }
}
