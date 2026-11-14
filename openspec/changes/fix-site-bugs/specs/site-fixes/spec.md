# Site fixes

## ADDED Requirements

### Requirement: Pages open on both hosts

Every page SHALL be built as `folder/index.html` so it opens on GitHub Pages and on Apache.

#### Scenario: Collections page on .ir
- WHEN a user opens `https://hubertuspilates.ir/collections/` or `/collections/reformers/`
- THEN the page is shown, not a folder list

#### Scenario: Old link without slash
- WHEN a user opens `/collections` (no `/` at the end)
- THEN the host redirects to `/collections/`

### Requirement: Saved theme wins

The theme the user picked SHALL stay after reload, even when the system theme is different.

#### Scenario: Light choice on a dark system
- WHEN the system theme is dark and the user picked light
- THEN after reload the site is light

### Requirement: Product description

The product page SHALL show `detail.desc`, or the short `desc` when there is no detail, and no empty box.

#### Scenario: Product without detail
- WHEN a product has `desc` but `detail` is `null`
- THEN the short `desc` is shown
