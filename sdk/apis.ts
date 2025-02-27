import {AggregationApi} from './api/aggregationApi';
import {AllocationsApi} from './api/allocationsApi';
import {ApplicationMetadataApi} from './api/applicationMetadataApi';
import {BlocksApi} from './api/blocksApi';
import {CalendarsApi} from './api/calendarsApi';
import {ComplexMarketDataApi} from './api/complexMarketDataApi';
import {ComplianceApi} from './api/complianceApi';
import {ConfigurationRecipeApi} from './api/configurationRecipeApi';
import {ConventionsApi} from './api/conventionsApi';
import {CorporateActionSourcesApi} from './api/corporateActionSourcesApi';
import {CounterpartiesApi} from './api/counterpartiesApi';
import {CustomEntitiesApi} from './api/customEntitiesApi';
import {CustomEntityDefinitionsApi} from './api/customEntityDefinitionsApi';
import {CutLabelDefinitionsApi} from './api/cutLabelDefinitionsApi';
import {DataTypesApi} from './api/dataTypesApi';
import {DerivedTransactionPortfoliosApi} from './api/derivedTransactionPortfoliosApi';
import {EntitiesApi} from './api/entitiesApi';
import {ExecutionsApi} from './api/executionsApi';
import {FeesAndCommissionsApi} from './api/feesAndCommissionsApi';
import {InstrumentsApi} from './api/instrumentsApi';
import {LegalEntitiesApi} from './api/legalEntitiesApi';
import {OrderGraphApi} from './api/orderGraphApi';
import {OrderInstructionsApi} from './api/orderInstructionsApi';
import {OrdersApi} from './api/ordersApi';
import {PackagesApi} from './api/packagesApi';
import {ParticipationsApi} from './api/participationsApi';
import {PersonsApi} from './api/personsApi';
import {PlacementsApi} from './api/placementsApi';
import {PortfolioGroupsApi} from './api/portfolioGroupsApi';
import {PortfoliosApi} from './api/portfoliosApi';
import {PropertyDefinitionsApi} from './api/propertyDefinitionsApi';
import {QuotesApi} from './api/quotesApi';
import {ReconciliationsApi} from './api/reconciliationsApi';
import {ReferencePortfolioApi} from './api/referencePortfolioApi';
import {RelationDefinitionsApi} from './api/relationDefinitionsApi';
import {RelationsApi} from './api/relationsApi';
import {RelationshipDefinitionsApi} from './api/relationshipDefinitionsApi';
import {RelationshipsApi} from './api/relationshipsApi';
import {SchemasApi} from './api/schemasApi';
import {ScopesApi} from './api/scopesApi';
import {SearchApi} from './api/searchApi';
import {SequencesApi} from './api/sequencesApi';
import {StructuredResultDataApi} from './api/structuredResultDataApi';
import {SystemConfigurationApi} from './api/systemConfigurationApi';
import {TransactionPortfoliosApi} from './api/transactionPortfoliosApi';
import {TranslationApi} from './api/translationApi';

export class Api {
    public aggregation:  AggregationApi
    public allocations:  AllocationsApi
    public applicationMetadata:  ApplicationMetadataApi
    public blocks:  BlocksApi
    public calendars:  CalendarsApi
    public complexMarketData:  ComplexMarketDataApi
    public compliance:  ComplianceApi
    public configurationRecipe:  ConfigurationRecipeApi
    public conventions:  ConventionsApi
    public corporateActionSources:  CorporateActionSourcesApi
    public counterparties:  CounterpartiesApi
    public customEntities:  CustomEntitiesApi
    public customEntityDefinitions:  CustomEntityDefinitionsApi
    public cutLabelDefinitions:  CutLabelDefinitionsApi
    public dataTypes:  DataTypesApi
    public derivedTransactionPortfolios:  DerivedTransactionPortfoliosApi
    public entities:  EntitiesApi
    public executions:  ExecutionsApi
    public feesAndCommissions:  FeesAndCommissionsApi
    public instruments:  InstrumentsApi
    public legalEntities:  LegalEntitiesApi
    public orderGraph:  OrderGraphApi
    public orderInstructions:  OrderInstructionsApi
    public orders:  OrdersApi
    public packages:  PackagesApi
    public participations:  ParticipationsApi
    public persons:  PersonsApi
    public placements:  PlacementsApi
    public portfolioGroups:  PortfolioGroupsApi
    public portfolios:  PortfoliosApi
    public propertyDefinitions:  PropertyDefinitionsApi
    public quotes:  QuotesApi
    public reconciliations:  ReconciliationsApi
    public referencePortfolio:  ReferencePortfolioApi
    public relationDefinitions:  RelationDefinitionsApi
    public relations:  RelationsApi
    public relationshipDefinitions:  RelationshipDefinitionsApi
    public relationships:  RelationshipsApi
    public schemas:  SchemasApi
    public scopes:  ScopesApi
    public search:  SearchApi
    public sequences:  SequencesApi
    public structuredResultData:  StructuredResultDataApi
    public systemConfiguration:  SystemConfigurationApi
    public transactionPortfolios:  TransactionPortfoliosApi
    public translation:  TranslationApi
}
