

export type EquipmentRequest = {
    RequestID?: string;
    RequestNumber?: string;
    DepartmentCode?: string;
    DepartmentName?: string;
    HRRequestReceivedDate?: string;
    DeliveryDate?: string;
    WarehouseEntryDate?: string;
    UnitApprovalDate?: string;
    RequestStatus?: string;
    RequestType?: string;
    Notes?: string;
    RequestItems?: EquipmentRequestItems[];
};
export type EquipmentRequestItems = {
    RequestItemID?: string;
    RequestID?: string;
    EquipmentName?: string;
    UnitOfMeasure?: string;
    Quantity?: string;
    EstimatedPrice?: string;
    CurrentStatus?: string;
    ItemNotes?: string;
};