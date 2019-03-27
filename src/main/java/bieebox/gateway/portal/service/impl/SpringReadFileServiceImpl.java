package bieebox.gateway.portal.service.impl;
import bieebox.gateway.portal.domain.Products;
import bieebox.gateway.portal.repository.SpringReadFileRepository;
import bieebox.gateway.portal.service.SpringReadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SpringReadFileServiceImpl implements SpringReadFileService {
    @Autowired private SpringReadFileRepository springReadFileRepository;

    @Override
    public List<Products> findAll() {
        return (List<Products>) springReadFileRepository.findAll();
    }
}
