package bieebox.gateway.portal.service.impl;

import bieebox.gateway.portal.service.SuppliersService;
import bieebox.gateway.portal.domain.Suppliers;
import bieebox.gateway.portal.repository.SuppliersRepository;
import bieebox.gateway.portal.service.dto.SuppliersDTO;
import bieebox.gateway.portal.service.mapper.SuppliersMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Suppliers.
 */
@Service
@Transactional
public class SuppliersServiceImpl implements SuppliersService {

    private final Logger log = LoggerFactory.getLogger(SuppliersServiceImpl.class);

    private final SuppliersRepository suppliersRepository;

    private final SuppliersMapper suppliersMapper;

    public SuppliersServiceImpl(SuppliersRepository suppliersRepository, SuppliersMapper suppliersMapper) {
        this.suppliersRepository = suppliersRepository;
        this.suppliersMapper = suppliersMapper;
    }

    /**
     * Save a suppliers.
     *
     * @param suppliersDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SuppliersDTO save(SuppliersDTO suppliersDTO) {
        log.debug("Request to save Suppliers : {}", suppliersDTO);
        Suppliers suppliers = suppliersMapper.toEntity(suppliersDTO);
        suppliers = suppliersRepository.save(suppliers);
        return suppliersMapper.toDto(suppliers);
    }

    /**
     * Get all the suppliers.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SuppliersDTO> findAll() {
        log.debug("Request to get all Suppliers");
        return suppliersRepository.findAll().stream()
            .map(suppliersMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one suppliers by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<SuppliersDTO> findOne(Long id) {
        log.debug("Request to get Suppliers : {}", id);
        return suppliersRepository.findById(id)
            .map(suppliersMapper::toDto);
    }

    /**
     * Delete the suppliers by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Suppliers : {}", id);        suppliersRepository.deleteById(id);
    }
}
