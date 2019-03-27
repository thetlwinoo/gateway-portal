package bieebox.gateway.portal.controller;
import bieebox.gateway.portal.domain.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import bieebox.gateway.portal.service.SpringReadFileService;
import org.springframework.ui.Model;

import java.util.List;

@Controller
public class SpringReadFileController {
    @Autowired private SpringReadFileService springReadFileService;

    public String home(Model model){
        model.addAttribute("Product",new Products());
        List<Products> products = springReadFileService.findAll();
        model.addAttribute("products",products);
        return "view/users";
    }
}
