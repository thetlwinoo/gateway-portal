package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.ColorsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Colors and its DTO ColorsDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ColorsMapper extends EntityMapper<ColorsDTO, Colors> {



    default Colors fromId(Long id) {
        if (id == null) {
            return null;
        }
        Colors colors = new Colors();
        colors.setId(id);
        return colors;
    }
}
