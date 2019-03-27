package bieebox.gateway.portal.service.mapper;

import bieebox.gateway.portal.domain.*;
import bieebox.gateway.portal.service.dto.PeopleDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity People and its DTO PeopleDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PeopleMapper extends EntityMapper<PeopleDTO, People> {



    default People fromId(Long id) {
        if (id == null) {
            return null;
        }
        People people = new People();
        people.setId(id);
        return people;
    }
}
