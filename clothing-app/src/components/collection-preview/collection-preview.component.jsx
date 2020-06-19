import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((_item, _idx) => _idx < 4)
          .map((_item) => (
            <CollectionItem key={_item.id} item={_item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
