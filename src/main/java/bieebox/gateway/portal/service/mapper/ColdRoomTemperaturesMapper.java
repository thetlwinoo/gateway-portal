package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.ColdRoomTemperaturesDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity ColdRoomTemperatures and its DTO ColdRoomTemperaturesDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ColdRoomTemperaturesMapper extends EntityMapper<ColdRoomTemperaturesDTO, ColdRoomTemperatures> {



    default ColdRoomTemperatures fromId(Long id) {
        if (id == null) {
            return null;
        }
        ColdRoomTemperatures coldRoomTemperatures = new ColdRoomTemperatures();
        coldRoomTemperatures.setId(id);
        return coldRoomTemperatures;
    }
}
