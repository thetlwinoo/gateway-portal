import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#PortalProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'product-product-photo',
                loadChildren: './product-product-photo/product-product-photo.module#PortalProductProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#PortalUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#PortalProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#PortalUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#PortalProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#PortalUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#PortalCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#PortalStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#PortalCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#PortalSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#PortalTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#PortalPeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#PortalPaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#PortalDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#PortalSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#PortalSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#PortalSupplierTransactionsModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#PortalPurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#PortalPurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#PortalBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#PortalCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#PortalCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#PortalCustomerTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#PortalInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#PortalInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#PortalOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#PortalOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#PortalSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#PortalColdRoomTemperaturesModule'
            },
            {
                path: 'colors',
                loadChildren: './colors/colors.module#PortalColorsModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#PortalPackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#PortalStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#PortalStockItemHoldingsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#PortalStockItemsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#PortalProductsModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#PortalProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#PortalProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#PortalProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#PortalProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#PortalUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#PortalStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#PortalStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#PortalVehicleTemperaturesModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalEntityModule {}
