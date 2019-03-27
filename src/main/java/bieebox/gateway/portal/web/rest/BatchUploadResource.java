package bieebox.gateway.portal.web.rest;

import bieebox.gateway.portal.service.ProductsService;
import bieebox.gateway.portal.web.rest.errors.BadRequestAlertException;
import bieebox.gateway.portal.web.rest.util.HeaderUtil;
import bieebox.gateway.portal.service.dto.ProductsDTO;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import io.github.jhipster.web.util.ResponseUtil;
import liquibase.util.file.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.Multipart;
import javax.validation.Valid;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.net.URI;
import java.net.URISyntaxException;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BatchUploadResource {
    private final Logger log = LoggerFactory.getLogger(ProductsResource.class);

    private static final String ENTITY_NAME = "products";

    private final ProductsService productsService;

    public BatchUploadResource(ProductsService productsService) {
        this.productsService = productsService;
    }

    @PostMapping("/batchupload")
//    public String uploadBatchFile(@RequestBody MultipartFile file, RedirectAttributes redirectAttributes) throws URISyntaxException {
    public ResponseEntity<RedirectAttributes> uploadBatchFile(@RequestBody MultipartFile file, RedirectAttributes redirectAttributes) throws URISyntaxException {
        log.debug("REST request to save Products : {}", file);
        if (file == null) {
            throw new BadRequestAlertException("No File to upload", ENTITY_NAME, "No File Exist");
        }
        boolean isFlag = saveDataFromUploadFile(file);

        if (isFlag) {
            redirectAttributes.addFlashAttribute("successmessage", "File Upload Sucessfully");
        } else {
            redirectAttributes.addFlashAttribute("errormessage", "File Upload not done, Please try again!");
        }

        return ResponseEntity.ok()
            .body(redirectAttributes);
//        return "redirect:/";
    }


    private boolean saveDataFromUploadFile(MultipartFile file) {
        boolean isFlag = false;

        String extension = FilenameUtils.getExtension(file.getOriginalFilename());

        if (extension.equalsIgnoreCase("json")) {
            isFlag = readDataFromJson(file);
        } else if (extension.equalsIgnoreCase("csv")) {
            isFlag = readDataFromCsv(file);
        } else if (extension.equalsIgnoreCase("xls") || extension.equalsIgnoreCase("xlsx")) {
            isFlag = readDataFromExcel(file);
        }

        return isFlag;
    }

    private boolean readDataFromExcel(MultipartFile file) {
        Workbook workbook = getWorkBook(file);
        Sheet sheet = workbook.getSheetAt(0);
        Iterator<Row> rows = sheet.iterator();
        rows.next();

        while (rows.hasNext()) {
            Row row = rows.next();
            ProductsDTO product = new ProductsDTO();
            if (row.getCell(0).getCellType() == Cell.CELL_TYPE_STRING) {
                product.setProductName(row.getCell(0).getStringCellValue());
            }
            if (row.getCell(1).getCellType() == Cell.CELL_TYPE_STRING) {
                product.setProductName(row.getCell(0).getStringCellValue());
            }
            if (row.getCell(2).getCellType() == Cell.CELL_TYPE_STRING) {
                product.setProductName(row.getCell(0).getStringCellValue());
            }

            this.productsService.save(product);
        }

        return true;
    }

    private Workbook getWorkBook(MultipartFile file) {

        Workbook workbook = null;
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());

        try {
            if (extension.equalsIgnoreCase("xlsx")) {
                workbook = new XSSFWorkbook(file.getInputStream());
            } else if (extension.equalsIgnoreCase("xls")) {
                workbook = new HSSFWorkbook(file.getInputStream());
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return workbook;
    }

    private boolean readDataFromCsv(MultipartFile file) {

        try {
            InputStreamReader reader = new InputStreamReader(file.getInputStream());
            CSVReader csvReader = new CSVReaderBuilder(reader).withSkipLines(1).build();
            List<String[]> rows = csvReader.readAll();

            for (String[] row : rows) {
                ProductsDTO product = new ProductsDTO();
                product.setProductName(row[0]);
                product.setMakeFlag(Boolean.getBoolean(row[1]));
                product.setFinishedGoodsFlag(Boolean.getBoolean(row[2]));
                product.setColor(row[3]);
                product.setSafetyStockLevel(Integer.parseInt(row[4]));
                product.setReorderPoint(Integer.parseInt(row[5]));
                product.setStandardCost(new BigDecimal(row[6]));
                product.setListPrice(new BigDecimal(row[7]));
                product.setDaysToManufacture(Integer.parseInt(row[10]));
                product.setSellStartDate(LocalDate.now());

                this.productsService.save(product);
            }
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    private boolean readDataFromJson(MultipartFile file) {

        try {
            InputStream inputStream = file.getInputStream();
            ObjectMapper mapper = new ObjectMapper();
            List<ProductsDTO> products = Arrays.asList(mapper.readValue(inputStream, ProductsDTO[].class));

            if (products != null && products.size() > 0) {
                for (ProductsDTO product : products) {
                    this.productsService.save(product);
                }
            }
        } catch (Exception ex) {
            return false;
        }

        return true;
    }
}
